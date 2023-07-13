import { ZeroAddress } from '../const';
import { TxDigest } from '../model/txDigest.interface';
import txDigestModel from '../model/txDigest.model';
import { formalizePageAndLimit } from '../utils';

export default class TxDigestRepo {
  private model = txDigestModel;

  public async findAll() {
    return this.model.find();
  }

  public async findByBlockNum(blockNum: number) {
    return this.model.find({ 'block.number': blockNum });
  }

  public async findByTxHashList(...txHashs: string[]) {
    return this.model.find({ txHash: { $in: txHashs } });
  }

  public async existID(blockNum: number, txHash: string, from: string, to: string) {
    return this.model.exists({ 'block.number': blockNum, txHash, from, to });
  }

  public async create(txDigest: TxDigest) {
    return this.model.create(txDigest);
  }

  public async bulkInsert(...txDigests: TxDigest[]) {
    return this.model.create(txDigests);
  }

  public async deleteAfter(blockNum: number) {
    return this.model.deleteMany({ 'block.number': { $gt: blockNum } });
  }

  public async countByAddress(address: string) {
    console.time('fromCount');
    const fromCount = await this.model.count({ from: address.toLowerCase() });
    console.timeEnd('fromCount');

    console.time('toCount');
    const toCount = await this.model.count({ to: address.toLowerCase() });
    console.timeEnd('toCount');
    return fromCount + toCount;
  }

  // paginates
  private async paginate(query: any, pageNum?: number, limitNum?: number) {
    const { page, limit } = formalizePageAndLimit(pageNum, limitNum);
    console.time('count');
    const count = await this.model.count(query);
    console.timeEnd('count');

    console.time('paginate');
    console.log(`query: ${JSON.stringify(query)}, limit: ${limit}, page: ${page}`);

    // const result = await this.model.find(query).skip(skipSize).limit(pageSize);
    const result = await this.model
      .find(query)
      .sort({ _id: -1 })
      .limit(limit)
      .skip(limit * page);
    // .sort({ 'block.number': -1 });
    // .sort({ 'block.number': -1 })
    // .limit(limit);
    // .skip(limit * page);
    console.timeEnd('paginate');

    console.time('sort');
    result.sort((a, b) => (a.block.number > b.block.number ? -1 : 1));
    console.timeEnd('sort');
    return { count, result };
  }

  public async paginateAll(pageNum?: number, limitNum?: number) {
    return this.paginate({}, pageNum, limitNum);
  }

  public async paginateByAccount(addr: string, pageNum?: number, limitNum?: number) {
    if (addr === ZeroAddress) {
      return this.paginate({ from: addr.toLowerCase() }, pageNum, limitNum);
    } else {
      return this.paginate({ $or: [{ from: addr.toLowerCase() }, { to: addr.toLowerCase() }] }, pageNum, limitNum);
    }
  }

  public async paginateByAccountInRange(start: number, end: number, addr: string, pageNum?: number, limitNum?: number) {
    return this.paginate(
      {
        $and: [
          { 'block.timestamp': { $gte: start, $lte: end } },
          {
            $or: [{ from: addr.toLowerCase() }, { to: addr.toLowerCase() }],
          },
        ],
      },
      pageNum,
      limitNum
    );
  }

  public async findInRange(startblock: number, endblock: number) {
    return this.model.find({ 'block.number': { $gte: startblock, $lt: endblock } });
  }

  public async findInRangeWithoutTxIndex(startblock: number, endblock: number) {
    return this.model.find({ txIndex: { $exists: false }, 'block.number': { $gte: startblock, $lt: endblock } });
  }

  public async findDistinctTxInRangeWithFromAndTo(
    startblock: number,
    endblock: number,
    from: string,
    to: string,
    method: string
  ) {
    return this.model
      .find({
        from: from.toLowerCase(),
        to: to.toLowerCase(),
        method,
        'block.number': { $gte: startblock, $lt: endblock },
      })
      .distinct('txHash');
  }

  public deleteByTxHash(txHash: string) {
    return this.model.deleteMany({ txHash });
  }

  public deleteInRange(start, end: number) {
    return this.model.deleteMany({ 'block.number': { $gte: start, $lte: end } });
  }

  public deleteByIds(ids: number[]) {
    return this.model.deleteMany({ _id: { $in: ids } });
  }

  public async bulkUpsert(txDigest: { id: TxDigest[] } | {}) {
    for (const id in txDigest) {
      await this.model.findOneAndUpdate({ _id: id }, txDigest[id], { new: true, upsert: true, overwrite: true });
    }
    return true;
  }
}

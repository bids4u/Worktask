export class Voucher{
  constructor(
    public voucher: String,
    public entry: Date= new Date(),
    public entryBS: String,
    public trn: Date= new Date(),
    public trnBS: String,
  ){}
}

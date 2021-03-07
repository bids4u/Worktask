export class AdditionalCost{
  constructor(
    public id: number,
    public costType: string,
    public additionalCost: string,
    public amounts: string,
    public credited: string,
    public item: string,
    public remarks: string,
    public groupCostMode: string
  ){}
}

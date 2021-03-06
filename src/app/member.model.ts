export class Member {
  public dateCreated: Date = new Date();
  public TWITTERPOPULATION: number = 328000000; // TODO figure of how to globally access this as a const
  public TOTALWORLDWEALTH: number = 60000000000;
  public influenceQuotient: number;

  constructor(public firstName: string, public lastName: string, public illuminatiNickname: string, public sectorOfInfluence: string, public numberOfTwitterFollowers: number, public netWorth: number, public politicalImpactQuotient: number, public suspicionOfIlluminatiMembership: number, public role: string, public salientDetails: string, public imgURL: string, public imgAlt: string) {
    this.influenceQuotient = numberOfTwitterFollowers/this.TWITTERPOPULATION + netWorth/this.TOTALWORLDWEALTH + politicalImpactQuotient - suspicionOfIlluminatiMembership;
  }
}

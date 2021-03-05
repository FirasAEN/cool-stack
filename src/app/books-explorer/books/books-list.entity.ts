interface IBooksListEntity {
  isLoading: boolean;
}

const defaultValues: IBooksListEntity = {
  isLoading: true,
};


export class BooksListEntity implements IBooksListEntity {
  public isLoading: boolean;

  public static default(): BooksListEntity {
    return new BooksListEntity(defaultValues);
  }

  public constructor(params: IBooksListEntity) {
    this.isLoading = params.isLoading;
  }

  public setLoading(isLoading: boolean): BooksListEntity {
    return new BooksListEntity({...this, isLoading});
  }
}


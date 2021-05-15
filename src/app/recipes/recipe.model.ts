/**
 * Define a recipe model which can be used as a blueprint for other recipes.
 * A Typescript class can serve this role since it can be instantiated to create new recipes.
 */
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  /**
   * The constructor arguments allow you to pass initial values to the model when you
   * instantiate a new recipe.
   * @param name
   * @param desc
   * @param imagePath
   */
  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}

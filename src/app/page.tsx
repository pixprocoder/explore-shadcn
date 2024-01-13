import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

async function getRecipes(): Promise<any> {
  const result = await fetch("http://localhost:5000/recipes");
  const data = result.json();
  return data;
}

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <div>
      <h1>All Recipes</h1>

      <div className="grid grid-col-1 lg:grid-cols-3 gap-4">
        {recipes.map((recipe: any) => (
          <Card key={recipe.id}>
            <CardHeader>
              <CardTitle>{recipe?.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Cuisine: <span className="text-blue-600">{recipe.cuisine}</span>
              </p>
              <p>
                instructions:{" "}
                <span className="text-blue-600">{recipe.instructions}</span>
              </p>
            </CardContent>
            <CardFooter className="gap-4">
              <p>
                duration:{" "}
                <span className="text-blue-600">{recipe.duration}</span>
              </p>
              <p>
                difficulty:{" "}
                <span className="text-blue-600">{recipe.difficulty}</span>
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

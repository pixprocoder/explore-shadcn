import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import img from "../../public/img/02.jpeg";

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
          <Card className="flex flex-col justify-between" key={recipe.id}>
            <CardHeader>
              <CardTitle>{recipe?.name}</CardTitle>
              <CardDescription>
                {" "}
                <p>
                  <span className="text-blue-600">
                    {recipe.duration} to cook
                  </span>
                </p>
              </CardDescription>
              {/* avater */}
            </CardHeader>
            <CardContent>
              <Image
                className="rounded-md mb-2"
                width={500}
                height={500}
                src={img}
                alt="img"
              />
              <p>
                Cuisine: <span className="text-blue-600">{recipe.cuisine}</span>
              </p>
              <p>
                instructions:{" "}
                <span className="text-blue-600">{recipe.instructions}</span>
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>view</Button>
              <p>
                difficulty:{" "}
                <span className="text-blue-600">{recipe.difficulty}</span>
              </p>
              <p>
                {recipe.vegetarian && (
                  <span className="text-blue-600">vegetarian</span>
                )}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

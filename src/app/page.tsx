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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import img from "../../public/img/banner.jpg";
import { Badge } from "@/components/ui/badge";

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
            <CardHeader className="flex flex-row items-center gap-3">
              <Avatar>
                <AvatarImage src={`/img/${recipe.image}`} />
                <AvatarFallback>{recipe.name.split(0, 2)}</AvatarFallback>
              </Avatar>
              <div className=" flex flex-col gap-1">
                <CardTitle>{recipe?.name}</CardTitle>
                <CardDescription>
                  {" "}
                  <p>
                    <span className="text-blue-600">
                      {recipe.duration} to cook
                    </span>
                  </p>
                </CardDescription>
              </div>
              {/* avater */}
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
            <CardFooter className="flex justify-between">
              <Button variant="secondary">view</Button>
              <p>
                <Badge variant="outline">{recipe.difficulty}</Badge>
              </p>
              <p>{recipe.vegetarian && <Badge>vegetarian</Badge>}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

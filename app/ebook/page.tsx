import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Ebook() {
  const NationalEbook = [
    {
      name: "Nipaers",
      author: "Nipaers",
      url: "https://www.nipaers.com/univebooks",
    },
    {
      name: "Advances in Processing Technologies for Bio Based Nanosystems in Food",
      author: "Ramos.O.L ",
      url: "http://www.taylorfrancis.com/books/9781315177328",
    },
    {
      name: "Food Processing Technology Impact On Product Attributes",
      author: "Jaiswal,A ",
      url: "http://www.taylorfrancis.com/books/9781315372365",
    },
    {
      name: "Epigenetic Risk of Cloning",
      author: "Inui,A ",
      url: "http://www.taylorfrancis.com/books/9780429120732",
    },
    {
      name: "Fermented foods Part 2 Tecnological Interventions",
      author: "Ray, R.C ",
      url: "http://www.taylorfrancis.com/books/9781315205359",
    },
    {
      name: "Food Applications of Nanotechnology",
      author: "Molina, G ",
      url: "http://www.taylorfrancis.com/books/9780429297038",
    },
    {
      name: "Bacterial Diseases of Crop Plants",
      author: "Borkar,S  ",
      url: "http://www.taylorfrancis.com/books/9781315367972",
    },
    {
      name: "Biotechnology Agriculture, Environment and Energy",
      author: "Zheng, F ",
      url: "http://www.taylorfrancis.com/books/9780429227103",
    }, {
      name: "Molecular Cell Biology of the Growth and Differentiation of Plant cells",
      author: "Rose, R.J  ",
      url: "http://www.taylorfrancis.com/books/9781315370477",
    }, {
      name: "Molecular Dissection of Complex Traits",
      author: "Paterson, A.H  ",
      url: "http://www.taylorfrancis.com/books/9780429117770",
    },
  ]
  const InternationalEbook = [
  ]

  return (
    <div className=" max-w-screen-xl mx-auto">
      <h2 className="text-2xl font-bold my-5 text-center">National Books</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {NationalEbook.map((resource) => (
          <Card
            key={resource.name}
            className="group hover:shadow-lg transition-all duration-300"
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {resource.name}
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardTitle>
              <CardDescription>Author: {resource.author}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <h2 className="text-2xl font-bold my-5 text-center">International Books</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/*     key={resource.name} */}
        {/*     className="group hover:shadow-lg transition-all duration-300" */}
        {/*   > */}
        {/*     <CardHeader> */}
        {/*       <CardTitle className="flex items-center justify-between"> */}
        {/*         {resource.name} */}
        {/*         <Button variant="ghost" size="icon" asChild> */}
        {/*           <a */}
        {/*             href={resource.url} */}
        {/*             target="_blank" */}
        {/*             rel="noopener noreferrer" */}
        {/*           > */}
        {/*             <ExternalLink className="w-4 h-4" /> */}
        {/*           </a> */}
        {/*         </Button> */}
        {/*       </CardTitle> */}
        {/*       <CardDescription>{resource.description}</CardDescription> */}
        {/*     </CardHeader> */}
        {/*   </Card> */}
        {/* ))} */}
      </div>


    </div>
  )
}

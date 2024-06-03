import Filter from "@/components/Filter";
import Header from "@/components/Header";
import ResourceCard from "@/components/ResourceCard";
import SearchForm from "@/components/SearchForm";
import { getResources, getResourcesPlaylist } from "@/sanity/actions";

export const revalidate = 900;

interface Props {
  searchParams: { [type: string]: string | undefined}
}

const Page = async ({searchParams}: Props) => {
  const resources = await getResources({
    query: "",
    category: searchParams?.category || '',
    page: "1",
  });

  const resourcePlaylist = await getResourcesPlaylist()
  
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-white">
            Class Notes Resources
          </h1>
        </div>
        <SearchForm />
      </section>
      <Filter />

      <section className="flex-center mt-6 w-full flex-col sm:mt-4">
        <Header />
        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-startS">
          {resources?.length > 0 ? (
            resources.map((resource: any) => (
              <ResourceCard
                key={resource._id}
                title={resource.title}
                id={resource._id}
                image={resource.image}
                downLoadNumber={resource.views}
                downloadLink={resource.downloadLink}
              />
            ))
          ) : (
            <p className="body-regular text-white-400">No Books Found</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Page;

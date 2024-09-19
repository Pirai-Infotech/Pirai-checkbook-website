import React from "react";
import parse from "html-react-parser";

const fetchPosts = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HUBSPOT_API_URL}?id=${id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUBSPOT_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const data = await response.json();
    return data?.results[0];
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return null;
  }
};

const Page = async ({ params }) => {
  const { id } = params;

  if (!id) {
    return <div>No ID provided</div>;
  }

  const apidata = await fetchPosts(id);

  if (!apidata) {
    return <div>No data found</div>;
  }

  return (
    <div className="container m-auto blog-con w-[90%] lg:w-[75%] xl:w-[65%] 2xl:w-[60%] py-4 md:py-10 lg:py-14">
      <p>{apidata.created}</p>
      <h1>{apidata.metaDescription}</h1>
      <p>{apidata.authorName}</p>
      <div>
        {apidata.postBody && parse(apidata.postBody)}
      </div>
    </div>
  );
};

export default Page;

import React, { Suspense } from "react";

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
    return [];
  }
};

const Page = async ({ searchParams }) => {
  const { id } = searchParams;

  if (!id) {
    return <div>No ID provided</div>;
  }

  const apidata = await fetchPosts(id);

  return (
    <div className="container main-con m-auto blog-con py-4 md:py-10 lg:py-14">
      <Suspense>
        <p>{apidata?.created}</p>
        <h1>{apidata?.metaDescription}</h1>
        <p>{apidata?.authorName}</p>
        {apidata && (
          <p dangerouslySetInnerHTML={{ __html: apidata?.postBody }}></p>
        )}
      </Suspense>
    </div>
  );
};

export default Page;

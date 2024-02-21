const contentful = require("contentful");

const base_url = "https://cdn.contentful.com";
const space = process.env.CONTENTFUL_SPACE;
const environment = process.env.CONTENTFUL_ENVIRONMENT;
const accessToken = process.env.CONTENTFUL_ACCESSTOKEN;
const contentType = process.env.CONTENTFUL_CONTENT_TYPE;
const caseStudiesContentTypeId = "caseStudies";

export const getCaseStudies = async () => {
  try {
    const res = await fetch(
      `${base_url}/spaces/${space}/environments/${environment}/entries?access_token=${accessToken}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(`Something went wrong with getting case studies ${err}`);
    return [];
  }
};

export const getCaseStudiesContent = async () => {
  try {
    const res = await fetch(
      `${base_url}/spaces/${space}/environments/${environment}/entries?access_token=${accessToken}&content_type=${caseStudiesContentTypeId}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const data = await res.json();
    const items = data?.items ?? [];
    const caseStudyFields = items.map((item) => item.fields);
    return caseStudyFields;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getFields = async () => {
  try {
    const data = await getCaseStudies();
    if (!data || !data.items) {
      console.log("No items found or data is undefined");
      return [];
    }
    const { items } = data;
    const caseStudies = items.filter((item) => item.sys.space.sys.id === space);
    const fields = caseStudies.map((cs) => cs.fields);
    return fields;
  } catch (err) {
    console.log(err);
  }
};

export const getLogos = async () => {
  try {
    const fields = await getFields();
    const logos = fields.filter((field) => field.title === "logos");
    return logos;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getCaseStudy = async (id) => {
  try {
    const res = await fetch(
      `${base_url}/spaces/${space}/environments/${environment}/entries/${id}`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getAssetDetails = async (assetId) => {
  try {
    const res = await fetch(
      `${base_url}/spaces/${space}/environments/${environment}/assets/${assetId}?access_token=${accessToken}`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    if (!data) {
      console.log("Something went wrong with getting asset details");
    }
    const assetURL = data.fields.file.url;
    return `https:${assetURL}`;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getCaseStudyPageData = async (query, value) => {
  try {
    const res = await fetch(
      `${base_url}/spaces/${space}/environments/master/entries?access_token=${accessToken}&content_type=caseStudies&fields.${query}=${value}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(error);
    return [];
  }
};

export const getAssetsInfo = async (id) => {
  const res = await fetch(
    `${base_url}/spaces/${space}/environments/${environment}/assets?access_token=${accessToken}&mimetype_group=image`
  );
  const data = await res.json();
  if (!data) {
    console.log("Something went wrong with getAssestsInfo()");
    return [];
  }
  const { items } = data;
  return items;
  // const fields = data.map((d) => d.items.fields);
  // console.log(fields);
  // return fields;
};

export const getHeroImage = async (ids) => {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE}/assets/${ids}?access_token=${process.env.CONTENTFUL_ACCESSTOKEN}&include=1`
  );
  const data = await res.json();
  if (!data) {
    console.log("Something went wrong with getHeroImage");
    return [];
  }
  const imageUrl = `https:${data.fields?.file.url}`;
  return imageUrl;
};

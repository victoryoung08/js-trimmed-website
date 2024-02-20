"use server";
import { redirect } from "next/navigation";
const hubspot = require("@hubspot/api-client");

//Hubspot API
const H_TOKEN = process.env.H_TOKEN;
const h_createContact = "https://api.hubapi.com/crm/v3/objects/contacts";

const hubspotHeaders = new Headers({
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${H_TOKEN}`,
});

export const createHubspotContact = async (formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const raw = JSON.stringify({
    properties: {
      email: email,
      phone: phone,
      firstname: name,
    },
  });

  const requestOptions = {
    method: "POST",
    headers: hubspotHeaders,
    body: raw,
  };

  try {
    const res = await fetch(h_createContact, requestOptions);
    if (!res.ok) {
      throw new Error(`HTTP Error! Status: ${res.status}`);
    }
    const data = await res.text();
    console.log(data);
    return data ? JSON.parse(data) : {};
  } catch (err) {
    console.log(`Something went wrong with hubspot ${err}`);
  }
};

// Mailerlite API

const ML_APIKEY = process.env.ML_APIKEY;

const mlHeaders = new Headers({
  "Content-Type": "application/json",
  Accept: "application / json",
  Authorization: `Bearer ${ML_APIKEY}`,
});

export const getSubscribers = async () => {
  try {
    const options = {
      method: "GET",
      headers: mlHeaders,
    };
    const res = await fetch(
      `https://connect.mailerlite.com/api/subscribers`,
      options
    );
    if (!res.ok) {
      throw new Error(`Error ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Failed to fetch ${error}`);
    throw error;
  }
};

export const createMLContact = async (formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");

  const bodyData = {
    email: email,
    fields: {
      name: name,
      phone: phone,
    },
    groups: ["109919835523122972"],
  };

  const options = {
    method: "POST",
    headers: mlHeaders,
    body: JSON.stringify(bodyData),
  };
  try {
    const res = await fetch(
      "https://connect.mailerlite.com/api/subscribers",
      options
    );
    const data = await res.json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.error(`failed to post ${error}`);
  }
};

export const handleLeads = async (formData) => {
  try {
    createHubspotContact(formData);
    createMLContact(formData);
    redirect("/thank-you");
  } catch (err) {
    console.error(`Something went wrong ${err}`);
  }
};

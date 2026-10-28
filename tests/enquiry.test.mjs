import assert from "node:assert/strict";
import { test } from "node:test";
import { enquirySchema, prepareEnquiry } from "../src/lib/enquiry.ts";

test("enquiry rejects missing, malformed and oversized contact details", () => {
  const valid = { name: "A Customer", email: "customer@example.com", message: "We need to connect our order workflow." };
  for (const invalid of [{...valid, name:" "}, {...valid,email:"invalid"}, {...valid,message:"short"}, {...valid,message:"x".repeat(4001)}]) {
    assert.equal(enquirySchema.safeParse(invalid).success, false);
  }
});

test("email brief preserves a customer's multiline text and safely encodes URI characters", () => {
  const draft = prepareEnquiry({ name:"  A Customer  ",email:"customer@example.com",company:"A & B",service:"Software & AI",message:"A workflow with ? & # symbols.\nKeep the second line." }, "team@example.com");
  const url = new URL(draft.href);
  assert.equal(url.pathname, "team@example.com");
  assert.equal(url.searchParams.get("subject"), "Project enquiry: Software & AI");
  assert.equal(url.searchParams.get("body"), draft.body);
  assert.ok(draft.body.includes("Name: A Customer\n"));
  assert.ok(draft.body.includes("A & B"));
  assert.ok(draft.body.endsWith("Keep the second line."));
  assert.equal(url.hash, "");
});

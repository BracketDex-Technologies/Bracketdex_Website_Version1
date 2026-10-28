import assert from "node:assert/strict";
import { test } from "node:test";

const base = process.env.SITE_TEST_URL || "http://127.0.0.1:3015";
test("all public pages render with a unique title, one h1 and a usable footer", async () => {
  const titles = new Set();
  for (const path of ["/","/services","/solutions","/projects","/industries","/about","/contact","/faq","/privacy"]) {
    const response = await fetch(base + path);
    assert.equal(response.status,200,path);
    const html = await response.text();
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    assert.ok(title,path);
    assert.ok(!titles.has(title),path);
    titles.add(title);
    assert.equal((html.match(/<h1\b/g)||[]).length,1,path);
    assert.match(html, /id="site-footer"/);
    assert.match(html, /mailto:bracketdevs\.teams@gmail\.com/);
    assert.match(html, /href="\/privacy"/);
    assert.doesNotMatch(html, /Verified .* required\.|Business Details Pending|Case Studies Need Real Evidence|Achievements Need Source Data/);
    assert.doesNotMatch(html, /classList\.add\("bd-progressive-text-active"\)/);
  }
});
test("homepage and portfolio contain evidence and clear ways to start", async () => {
  const home = await (await fetch(base)).text();
  for(const text of ["Kiosk Learning Lab","WiseMelon","ReManage Society","Start where you are.","How much will a project cost"]) assert.ok(home.includes(text),text);
  const projects = await (await fetch(base+"/projects")).text();
  for(const text of ["NativeBerry","CreativeMark Hub","QuoteFlow"]) assert.ok(projects.includes(text),text);
});
test("enquiry describes email handoff honestly and unknown URLs return 404", async () => {
  const contact = await (await fetch(base+"/contact")).text();
  assert.match(contact,/Prepare enquiry/);
  assert.match(contact,/prepare an email for you to review and send/);
  assert.doesNotMatch(contact,/Your project details are ready for review/);
  assert.equal((await fetch(base+"/this-page-does-not-exist")).status,404);
});

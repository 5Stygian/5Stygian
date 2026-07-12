import * as c from "@/app/components/index";

export default function Components() {
  return (
    <>
      <c.TableOfContents />
      <c.Content domHeader="Components">
        <h2 id="page-summary">What is this?</h2>
        <p>
          This page is for showing off all of the react components that i've
          made. "But how do I use them?" you may ask. Just look at the source
          code. All components reside in this path: "{"<ROOT>"}/app/components". I'm
          much too lazy to make documentation but I don't think that their usage is too
          hard to follow.
        </p>
        <h2 id="showcase">Showcase</h2>
        <c.Notice type="info">Jello, world!</c.Notice>
        <c.Notice type="warning">Jello, world!</c.Notice>
        <c.Post title="Title" tags={["tag 1", "tag 2"]}>
          This is the summary segment
        </c.Post>
      </c.Content>
    </>
  );
}

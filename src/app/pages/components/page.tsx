import * as c from '@/app/components/index';

export default function Components() {
  return (
    <c.Content domHeader='Components'>
      <c.Notice type='info'>
        hello
      </c.Notice>
      <c.Notice type='warning'>
        hello
      </c.Notice>
      <c.Post title="Post" tags={["tag 1", "tag 2"]}>
        This is the summary segment
      </c.Post>
    </c.Content>
  );
}

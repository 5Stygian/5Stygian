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
    </c.Content>
  );
}
export default function testChangerAction(test: string) {
  return {
    type: "HELLO",
    payload: test
  };
}

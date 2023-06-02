import Button from "@/components/Button";


export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold"></h1>
      <Button
        intent={"primary"}
      >
        Signin
      </Button>
    </div>
  );
}
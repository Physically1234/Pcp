import Button from "@/components/Sign_in";


export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Hello, Next.js!</h1>
      <Button
        intent={"primary"}
      >
        Signin
      </Button>
    </div>
  );
}
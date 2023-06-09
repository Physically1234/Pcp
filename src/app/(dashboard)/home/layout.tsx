"use client"
import Header from "@/components/sub-components/Header";
import RightBar from "@/components/sub-components/RightBar";
import { useAppDispatch } from "@/hooks";
import { store } from "@/store";
import { fetchIntialPosts } from "@/store/post.slice";

export const metadata = {
  title: "Handic App",
  description: "",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const dispatch= useAppDispatch();

  dispatch(fetchIntialPosts())

  return (
    <div className={"h-full w-full grid"} style={{gridTemplateColumns:"2fr 1fr"}}>
      <section aria-label="post-container block">
        <Header title="Home"/>
         {props.children}
      </section>  
      <RightBar/>
    </div>
  );
}
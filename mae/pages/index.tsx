import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, {useState, useEffect} from "react";
import useSWR from "swr";

import NavBar from "../src/modules/Nav/NavBar";
import BlogsContainer from "../src/modules/Blogs/BlogsContainer";
import DropDown from "../src/modules/Blogs/DropDown";
import {tagsType} from "../src/utils/tags";
import { Container } from "@material-ui/core";
import PaginationBtn from "../src/modules/ButtonGroups/PaginationBtn";
import useQueryStore from "../src/store/QueryStore";
import getUrl from "../src/utils/getUrl";

interface HomeProps {}

export type dataType = {
  id: React.Key & String,
  title: string,
  authorName: string,
  tags?: tagsType,
  eventTime?: string,
  content: string
}[]

const swrOptions = {
  revalidateOnFocus: false
}
const Home:React.FC<HomeProps> = () =>  {
  const pageNum = useQueryStore(state=> state.pageNum);
  const query = useQueryStore(state=> state.query);
  const {data, error} = useSWR(`http://localhost:1337/blogs${getUrl(pageNum,query)}`, swrOptions);
  if(error){
    console.log(data)
    console.log(error)
  }

  const [isNext,setIsNext] = useState(false);

  // const data:dataType = [
  //   {
  //     id: "1",
  //     title: "first blog",
  //     authorName: "NO description",
  //     tags: "other",
  //     content: "# something \n something"
  //   },
  //   {
  //     id: "2",
  //     title: "first blog",
  //     authorName: "NO description",
  //     tags: "event",
  //     eventTime: "2022-03-12 13:00:00",
  //     content: "# something  \n something"
  //   },
  // ]

  useEffect(()=>{
    if(data){
      setIsNext(data.length>=10);
    }
  }, [data])

  return (
    <div className={styles.container}>
      <Head>
        <title>Comrade</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <DropDown />
      {
        data?(
          <BlogsContainer data={data} />
        )
        :(
          <Container>
            <h1>No result found</h1>
          </Container>
        )
      }
      <PaginationBtn isNext={isNext} />
    </div>
  );
}

export default Home;

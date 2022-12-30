import { useState } from "react";
import { Inter } from "@next/font/google";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InfiniteScroll from "react-infinite-scroll-component";
import Issues from "./components/githubIssues";

function Header({ title } : {title: string}) {
  return <h1 className="text-2xl py-8">{title}</h1>;
}

/*
<InfiniteScroll
        dataLength={posts.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        {posts.map((data) => (
          <div key={data.id}>
            <div className="back">
              <strong> {data.id}</strong> {data.title}
            </div>
            {data.completed}
          </div>
        ))}
      </InfiniteScroll>
      <style jsx>
        {`
          .back {
            padding: 10px;
            background-color: dodgerblue;
            color: white;
            margin: 10px;
          }
        `}
      </style>

    */

export default function Home() {
  const [validate, setValid] = useState({ text: "default", tempText: "" });
  const isValid = (text:string) => text.length < 2;
  const gitHubIssues: {author:string}[] = [{author: ""}];
  const handleSubmit = () => {
    setValid({ text: validate.tempText, tempText: validate.text });
  };
  return (
    <div>
      <Header title="GitHub Issue Viewer" />
      <div>
        <TextField
          id="standard-helperText"
          label="organisation/repo"
          required
          error={isValid(validate.text)}
          helperText={isValid(validate.text) ? "suggestion is too short" : ""}
          onChange={(event) =>
            setValid({ text: "default", tempText: event.target.value })
          }
        />
        <Button
          size="large"
          variant="contained"
          className="text-white bg-blue-500 m-3"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
      

      <Issues />
    </div>
  );
}

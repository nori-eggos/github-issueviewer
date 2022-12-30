import { useState } from "react";
import { Inter } from "@next/font/google";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InfiniteScroll from "react-infinite-scroll-component";
import Issues from "./components/githubIssues";

function Header({ title } : {title: string}) {
  return <h1 className="text-2xl py-8">{title}</h1>;
}

  /**
   * IMPORTANT NOTE
   * ALL Commented Code is from the first metod to fetch with SWR and lib/fetcher (not finished)
   */

export default function Home() {
  const helperText = "suggestion is too short"
  const [organisation, setOrganisation] = useState({ text: "default", tempText: "" });
  const [repository, setRepo] = useState({ text: "default", tempText: "" });
  const isValid = (text:string) => text.length < 2;
  let submit = false;
  const handleSubmit = () => {
    setOrganisation({ text: organisation.tempText, tempText: organisation.text });
    setRepo({ text: repository.tempText, tempText: repository.text });
    submit = true;
  };
  return (
    <div>
      <Header title="GitHub Issue Viewer" />
      <div>
        <TextField
          id="standard-helperText"
          label="organisation"
          required
          error={isValid(organisation.text)}
          helperText={isValid(organisation.text) ? helperText : ""}
          onChange={(event) =>
            setOrganisation({ text: organisation.text, tempText: event.target.value })
          }
        />
        <TextField
          id="standard-helperText"
          label="repo"
          required
          error={isValid(repository.text)}
          helperText={isValid(repository.text) ? helperText : ""}
          onChange={(event) =>
            setOrganisation({ text: repository.text, tempText: event.target.value })
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
      {
        submit ? <Issues name={organisation.text} repo={repository.text}/>
        : ""
      }
    </div>
  );
}

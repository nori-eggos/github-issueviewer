import { useState } from "react";

/*export default async (req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { json: Promise<any>; }): any; new(): any; }; }; }) => {
  var key = process.env.GITHUB_KEY 
  const header = {
    "Authorization": "Token" + key
  }
  const name = "LAION-AI";//req.body.name;
  const repo = "Open-Assistant"
  
  const url = "https://api.github.com/repos/LAION-AI/Open-Assistant/issues";
  const response = await fetch(url, {"headers": header});
  const json = response.json();

  return res.status(200).json({
    json
  })
};*/

export default function fetchIssues(name: string, repo: string): any {
  var key = process.env.GITHUB_KEY;
  const header = {
    Authorization: "Token" + key,
  };

  return repoDataURL();

  async function repoDataURL() {
    const url = "https://api.github.com/repos/" + name + "/" + repo + "/issues";
    await fetch(url, {
      headers: header,
    })
      .then((res) => res.json())
      .then(
        (result) => {
          return result;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}

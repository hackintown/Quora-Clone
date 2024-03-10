import { addDoc, collection } from "firebase/firestore";
import { db } from "@/app/firebase";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Avatar, useTheme } from "@mui/material";
import { getAuth } from "firebase/auth";
type postType = {
  setPost: any;
};
const PostPopup = (props: postType) => {
  const questionRef = collection(db, "questions");
  const [quest, setQuest] = useState("");
  const [value, setValue] = React.useState("1");
  const addQuestion = () => {
    if (quest.trim() === "") {
      alert("Bhai Kuh Dal Input Me Tabhi Aage jaunga?");
    }
    addDoc(questionRef, {
      question: quest,
    });
    props?.setPost(false);
  };
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start flex-col">
                <div className="rounded-full bg-gray-200 flex justify-center cursor-pointer mb-3">
                  <button
                    onClick={() => props?.setPost(false)}
                    className="w-[24px] h-[24px] "
                  >
                    X
                  </button>
                </div>
                <div className="w-full">
                  <Box sx={{ width: "100%", typography: "body1" }}>
                    <TabContext value={value}>
                      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList
                          onChange={handleChange}
                          aria-label="lab API tabs example"
                        >
                          <Tab label="Add Question" value="1" />
                          <Tab label="Create Post" value="2" />
                        </TabList>
                      </Box>
                      <TabPanel value="1">
                        <div className="mb-3">
                          <Avatar alt="Remy Sharp">
                            {/* {userName && userName.charAt(0).toUpperCase()} */}
                          </Avatar>
                        </div>
                        <input
                          value={quest}
                          onChange={(e) => setQuest(e.target.value)}
                          placeholder="Start your question with 'What', 'How', 'Why', etc"
                          className="border-b border-gray-400 w-full mb-5"
                        />
                      </TabPanel>
                      <TabPanel value="2">Item Two</TabPanel>
                    </TabContext>
                  </Box>
                </div>
                <button
                  type="button"
                  onClick={addQuestion}
                  className="ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Add question
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPopup;

import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProfileForm = () => {
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("addd", address);
    console.log("gender", gender);
    console.log("aboutMe", aboutMe);
    console.log("phone", phone);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          background: "#F5385D",
          color: "white",
          border: "none",
          "&:hover": {
            backgroundColor: "black",
            color: "white",
            border: "none",
          },
        }}>
        Update me
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}>
        <DialogTitle className="flex justify-center">
          {"Update Your Profile"}
        </DialogTitle>
        <DialogContent>
          <div className="p-2">
            <form onSubmit={handleSubmit}>
              <label>About me</label>
              <textarea
                // type="textarea"
                value={aboutMe}
                rows={5}
                placeholder="tell us about your self"
                onChange={(e) => setAboutMe(e.target.value)}
                className="block w-96"
              />
              <label>
                <br />
                Address:
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </label>
              <br />
              <label>
                Gender:
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <br />
              <label>
                Phone Number:
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
              <br />
              <div className="flex justify-end mt-4 gap-4">
                <button
                  onClick={handleClose}
                  className="bg-grey rounded-lg px-4 py-2">
                  Cancel
                </button>
                <button
                  onClick={handleClose}
                  type="submit"
                  className="bg-primary text-white rounded-lg px-4 py-2 ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProfileForm;

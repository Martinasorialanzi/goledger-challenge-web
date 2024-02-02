"use client";
import { useState } from "react";
import {
  useCreateArtistMutation,
  useGetArtistByIdQuery,
  useUpdateArtistMutation,
} from "@/libs/features/artistSlices";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useParams } from "next/navigation";
import Swal from "sweetalert2";

const EditArtist = () => {
  const id = useParams();
  const artistId = decodeURIComponent(String(id.id));
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  const [updateArtist, { isLoading: isUpdating }] = useUpdateArtistMutation();
  const [createArtist] = useCreateArtistMutation();
  const { data: artist, isLoading, isError } = useGetArtistByIdQuery(artistId);
  if (isLoading) return <div>Loading...</div>;

  if (isUpdating) return <div>Loading...</div>;

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Are you sure you want to save the changes?",
      showDenyButton: true,
      showConfirmButton: true,
      confirmButtonText: "Save",
      confirmButtonColor: "#E95821",
      denyButtonColor: "#5B5B5B",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Saved!",
          showConfirmButton: false,
          timer: 1500,
        });

        updateArtist(artistId, name, about);
      } else if (result.isDenied) {
        Swal.fire({
          icon: "info",
          title: "Changes were not saved!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <>
      <div className="grid justify-center align-center">
        <div className="bg-[rgba(39,39,39,255)] rounded p-6  ">
          <div className="font-bold m-4 text-[2em]  ">
            Update Artist
            <p className="font-light text-[0.8em]">{artist.name}</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex max-w-md flex-col gap-4 w-[40em]"
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Artist name" color={"white"} />
              </div>
              <TextInput
                type="text"
                defaultValue={artist.name}
                required
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="about" color={"white"} value="About" />
              </div>
              <TextInput
                onChange={(e) => {
                  setAbout(e.target.value);
                }}
                type="text"
                required
                shadow
                defaultValue={artist.about}
              />
            </div>

            <Button type="submit" className="bg-[rgba(89,91,141,255)]">
              Save change
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditArtist;

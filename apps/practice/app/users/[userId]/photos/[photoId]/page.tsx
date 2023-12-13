import React from "react";

interface Props {
  params: { userId: number; photoId: number };
}

const PhotoPage = ({ params: { userId, photoId } }: Props) => {
  return (
    <div>
      PhotosDetailPage {userId} {photoId}
    </div>
  );
};

export default PhotoPage;

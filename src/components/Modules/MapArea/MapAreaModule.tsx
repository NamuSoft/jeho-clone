import { APIProvider, Map } from "@vis.gl/react-google-maps";

type Props = {
  // Add props here
};

export const MapAreaModule = (props: Props) => {
  return (
    <div className='h-[700px] w-full'>
      <APIProvider apiKey={"AIzaSyA6WqMeNU1cT5SdPi5MhmUrAqKTjUaZNGY"}>
        <Map
          style={{ width: "100%", height: "100%" }}
          defaultCenter={{ lat: 35.662, lng: 139.7038 }}
          defaultZoom={15}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        />
      </APIProvider>
    </div>
  );
};

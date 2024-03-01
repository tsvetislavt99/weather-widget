// TODO: Extract location to types
type RegionTitleProps = {
  location: {
    area: string;
    region: string;
    country: string;
  };
  loading: boolean;
};

export default function RegionTitle({ location, loading }: RegionTitleProps) {
  const regionTitle = (
    <h1>{`${location?.area} ${location?.region} ${location?.country}`}</h1>
  );
  const loadingTitle = <h1 className="loading-title">&nbsp;</h1>;
  return loading ? loadingTitle : regionTitle;
}

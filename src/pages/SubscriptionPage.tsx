import Pricing from '../components/Pricing';

type Props = {
  title: string
  children: JSX.Element
};

const Wrapper = ({ title, children }: Props) => (
  <div className="py-2">
    <h2 className="text-xl">{title}</h2>
    <div className="bg-white min-h-[200px] flex items-center justify-center border border-slate-300">
      {children}
    </div>
  </div>
);

const SubscriptionPage = () => {
  return (
    <div>
      <Wrapper title='Pricing plan'>
        <Pricing />
      </Wrapper>
    </div>
  );
};

export default SubscriptionPage;
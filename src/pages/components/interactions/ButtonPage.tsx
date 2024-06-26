import Wrapper from "../../../components/Wrapper";
import CircleButton from "../../../components/buttons/CircleButton";
import CloseButton from "../../../components/buttons/CloseButton";
import RotatingBorderButton from "../../../components/buttons/RotatingBorderButton";
import RotatingGradientButton from "../../../components/buttons/RotatingGradientButton";
import ShadowButton from "../../../components/buttons/ShadowButton";
import SlideButton from "../../../components/buttons/SlideButton";
import ClickPropagationButton from "../../../components/buttons/ClickPropagationButton";
import VerticalFillButton from "../../../components/buttons/VerticalFillButton";
import CircleFillButton from "../../../components/buttons/CircleFillButton";


const ButtonPage = () => {
  const text = 'Please click me'
  return (
    <>
      <h1 className="text-3xl">Button Page</h1>
      <Wrapper title='Shadow'>
        <ShadowButton text={text} />
      </Wrapper>
      <Wrapper title='Fill From Left'>
        <CircleFillButton text={text} />
      </Wrapper>
      <Wrapper title='Rotating border'>
        <RotatingBorderButton text={text} />
      </Wrapper>
      {/* <Wrapper title='Rotating gradient'>
        <RotatingGradientButton text={text} />
      </Wrapper> */}
      <Wrapper title='Click protagation'>
        <ClickPropagationButton text={text} />
      </Wrapper>
      <Wrapper title='Fill'>
        <SlideButton text={text} />
      </Wrapper>
      <Wrapper title='Close'>
        <CloseButton text={text} />
      </Wrapper>
      <Wrapper title='Circle'>
        <CircleButton text={text} />
      </Wrapper>
      <Wrapper title='Slide'>
        <VerticalFillButton text={text} />
      </Wrapper>
    </>
  );
};

export default ButtonPage;

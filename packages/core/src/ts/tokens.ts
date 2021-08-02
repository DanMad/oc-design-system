const colorCinnabarShade = 'rgb(218, 32, 32)';
const colorCinnabar = 'rgb(237, 74, 74)';
const colorCinnabarTint = 'rgb(248, 124, 124)';
const colorCrusta = 'rgb(253, 120, 71)';
const colorCandlelight = 'rgb(250, 218, 10)';
const colorChristiShade = 'rgb(18, 140, 1)';
const colorChristi = 'rgb(49, 188, 6)';
const colorChristiTint = 'rgb(88, 226, 11)';
const colorVikingShade = 'rgb(5, 104, 120)';
const colorViking = 'rgb(17, 160, 173)';
const colorVikingTint = 'rgb(33, 208, 217)';
const colorAmethyst = 'rgb(129, 67, 191)';
const colorSaddle = 'rgb(83, 38, 38)';

const colorAlabaster = 'rgb(249, 248, 248)';

const colorCharcoal = 'rgb(28, 28, 28)';
const colorCharcoalTransparent = 'rgba(0, 0, 0, 0.89)';
const colorGunmetal = 'rgb(115, 115, 115)';
const colorGunmetalTransparent = 'rgba(0, 0, 0, 0.55)';
const colorHurricane = 'rgb(168, 168, 168)';
const colorHurricaneTransparent = 'rgba(0, 0, 0, 0.34)';
const colorFossil = 'rgb(201, 201, 201)';
const colorFossilTransparent = 'rgba(0, 0, 0, 0.21)';
const colorAlto = 'rgb(222, 222, 222)';
const colorAltoTransparent = 'rgba(0, 0, 0, 0.13)';
const colorGallery = 'rgb(235, 235, 235)';
const colorGalleryTransparent = 'rgba(0, 0, 0, 0.08)';
const colorConcrete = 'rgb(242, 242, 242)';
const colorConcreteTransparent = 'rgba(0, 0, 0, 0.05)';
const colorCotton = 'rgb(247, 247, 247)';
const colorCottonTransparent = 'rgba(0, 0, 0, 0.03)';
const colorPowder = 'rgb(250, 250, 250)';
const colorPowderTransparent = 'rgba(0, 0, 0, 0.02)';
const colorDaisy = 'rgb(252, 252, 252)';
const colorDaisyTransparent = 'rgba(0, 0, 0, 0.01)';
const colorBlizzard = 'rgb(255, 255, 255)';
const colorBlizzardTransparent = 'rgba(0, 0, 0, 0)';

const fontFamilySansSerif = '"Open Sans", Helvetica, Arial, sans-serif';
const fontFamilyCondensed =
  '"Open Sans Condensed", Helvetica, Arial, sans-serif';
const fontFamilyMonospace = '"Inconsolata", Menlo, Consolas, monospace';

const spaceXxs = '0.25rem';
const spaceXs = '0.5rem';
const spaceS = '1rem';
const spaceM = '1.5rem';
const spaceL = '2.5rem';
const spaceXl = '4rem';
const spaceXxl = '6.5rem';

const borderRadiusS = '0.125rem';
const borderRadiusM = '0.25rem';
const borderRadiusL = '0.5rem';

const _boxShadowForeground = `0.125rem -0.125rem 0.125rem -0.125rem rgba(${colorCinnabarShade}, 0.05)`;
const boxShadow1 = `${_boxShadowForeground}, 0 0.25rem 0.25rem -0.125rem rgba(${colorSaddle}, 0.21)`;
const boxShadow2 = `${_boxShadowForeground}, 0 0.5rem 0.5rem -0.25rem rgba(${colorSaddle}, 0.21)`;
const boxShadow3 = `${_boxShadowForeground}, 0 1rem 1rem -0.25rem rgba(${colorSaddle}, 0.13)`;
const boxShadow4 = `${_boxShadowForeground}, 0 1.5rem 1.5rem -0.25rem rgba(${colorSaddle}, 0.08)`;

const transitionDuration0 = '0ms';
const transitionDuration1 = '125ms';
const transitionDuration2 = '250ms';
const transitionDuration3 = '375ms';
const transitionDuration4 = '500ms';
const transitionDuration5 = '625ms';
const transitionDuration6 = '750ms';
const transitionDuration7 = '875ms';
const transitionDuration8 = '1000ms';
const transitionDuration9 = '1125ms';
const transitionDuration10 = '1250ms';
const transitionDuration11 = '1375ms';
const transitionDuration12 = '1500ms';

const transitionTimingSmooth = 'ease-in-out';
const transitionTimingBounceOut = 'cubic-bezier(0.6, 0, 0.5, 1.4)';

const tokens: Record<string, string | string[]> = {
  borderRadiusS,
  borderRadiusM,
  borderRadiusL,
  boxShadow1,
  boxShadow2,
  boxShadow3,
  boxShadow4,
  colorAlabaster,
  colorAlto,
  colorAltoTransparent,
  colorAmethyst,
  colorBlizzard,
  colorBlizzardTransparent,
  colorCandlelight,
  colorCharcoal,
  colorCharcoalTransparent,
  colorChristi,
  colorChristiShade,
  colorChristiTint,
  colorCinnabar,
  colorCinnabarShade,
  colorCinnabarTint,
  colorConcrete,
  colorConcreteTransparent,
  colorCotton,
  colorCottonTransparent,
  colorCrusta,
  colorDaisy,
  colorDaisyTransparent,
  colorFossil,
  colorFossilTransparent,
  colorGallery,
  colorGalleryTransparent,
  colorGunmetal,
  colorGunmetalTransparent,
  colorHurricane,
  colorHurricaneTransparent,
  colorPowder,
  colorPowderTransparent,
  colorSaddle,
  colorViking,
  colorVikingShade,
  colorVikingTint,
  fontFamilyCondensed,
  fontFamilyMonospace,
  fontFamilySansSerif,
  spaceL,
  spaceM,
  spaceS,
  spaceXs,
  spaceXl,
  spaceXxs,
  spaceXxl,
  transitionDuration0,
  transitionDuration1,
  transitionDuration2,
  transitionDuration3,
  transitionDuration4,
  transitionDuration5,
  transitionDuration6,
  transitionDuration7,
  transitionDuration8,
  transitionDuration9,
  transitionDuration10,
  transitionDuration11,
  transitionDuration12,
  transitionTimingBounceOut,
  transitionTimingSmooth,
};

export {
  borderRadiusS,
  borderRadiusM,
  borderRadiusL,
  boxShadow1,
  boxShadow2,
  boxShadow3,
  boxShadow4,
  colorAlabaster,
  colorAlto,
  colorAltoTransparent,
  colorAmethyst,
  colorBlizzard,
  colorBlizzardTransparent,
  colorCandlelight,
  colorCharcoal,
  colorCharcoalTransparent,
  colorChristi,
  colorChristiShade,
  colorChristiTint,
  colorCinnabar,
  colorCinnabarShade,
  colorCinnabarTint,
  colorConcrete,
  colorConcreteTransparent,
  colorCotton,
  colorCottonTransparent,
  colorCrusta,
  colorDaisy,
  colorDaisyTransparent,
  colorFossil,
  colorFossilTransparent,
  colorGallery,
  colorGalleryTransparent,
  colorGunmetal,
  colorGunmetalTransparent,
  colorHurricane,
  colorHurricaneTransparent,
  colorPowder,
  colorPowderTransparent,
  colorSaddle,
  colorViking,
  colorVikingShade,
  colorVikingTint,
  fontFamilyCondensed,
  fontFamilyMonospace,
  fontFamilySansSerif,
  spaceL,
  spaceM,
  spaceS,
  spaceXs,
  spaceXl,
  spaceXxs,
  spaceXxl,
  tokens as default,
  transitionDuration0,
  transitionDuration1,
  transitionDuration2,
  transitionDuration3,
  transitionDuration4,
  transitionDuration5,
  transitionDuration6,
  transitionDuration7,
  transitionDuration8,
  transitionDuration9,
  transitionDuration10,
  transitionDuration11,
  transitionDuration12,
  transitionTimingBounceOut,
  transitionTimingSmooth,
};

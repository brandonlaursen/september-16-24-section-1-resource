<quiz>
  <question>
    <p>Of the options listed, which one of the following has the lowest level of specificity with regards to how CSS determines rule application?</p>
    <answer>Rules that target an id</answer>
    <answer>Rules that target a class and pseudo-classes</answer>
    <answer correct>Rules that target a tag name</answer>
    <explanation>Rules that target tag names have the lowest level of specificity from the options listed.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>Which of the following CSS selectors has the highest specificity?</p>
    <answer correct>`div.article p.article-text a`</answer>
    <answer>`div p a`</answer>
    <answer>`div p a.plain`</answer>
    <answer>`*`</answer>
    <explanation>The `div.article p.article-text a` rule has two classes and two body tags. That gives it a "score" of "0-2-2" which is higher than the others.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>Which of the following HTML blocks contains an element that would be selected by `div#main p.text`?</p>
    <answer correct>`<div id="main"><p class="text">Lorem</p></div>`</answer>
    <answer>`<div class="main"><p class="text">Lorem</p></div>`</answer>
    <answer>`<div id="main"><p id="text">Lorem</p></div>`</answer>
    <answer>`<div class="main"><p id="text">Lorem</p></div>`</answer>
    <explanation>The "#" selects ids and the "." selects classes. This looks for a DIV that has an id of "main" with a child P element with a class of "text".</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>Which one of the following HTML blocks contains an element that would be selected by `p > a[href]`</p>
    <answer correct>`<p><a href="#">Link</a></p>`</answer>
    <answer>`<p><span><a href="#">Link</a></span></p>`</answer>
    <answer>`<a href="#"><div>Link</div></a>`</answer>
    <answer>`<p><a name="href">Link</a></p>`</answer>
    <explanation>The ">" means a direct child. The "[href]" means the element must have an attribute named "href". Only the correct answer has a P element with a direct child A element with an HREF parameter.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>Which of the following CSS selectors would apply to all SPAN tags that do not have the "highlighted" class?</p>
    <answer correct>`span:not(.highlighted)`</answer>
    <answer>`span:except(.highlighted)`</answer>
    <answer>`span:not(#highlighted)`</answer>
    <answer>`span:without(.highlighted)`</answer>
    <explanation>Using the `:not` pseudo-class applies it to the element that goes to the left of it and precludes the selector within its parentheses. Therefore, `span:not(.highlighted)` chooses SPAN elements that do not have the "highlighted" class.</explanation>
  </question>
</quiz>

<quiz>
  <question multiple>
    <p>Which of the following are generic names for font families defined by the CSS standard?</p>
    <answer correct>serif</answer>
    <answer correct>sans-serif</answer>
    <answer correct>monospace</answer>
    <answer>times</answer>
    <answer>default</answer>
    <explanation>The CSS standard defines nine generic names: serif, sans-serif, monospace, cursive, fantasy, system-ui, emoji, math, and fangsong.</explanation>
  </question>
</quiz>

<quiz>
  <question multiple>
    <p>Which of the following are valid CSS rules to set the size of rendered text?</p>
    <answer correct>`font-size: 12px;`</answer>
    <answer correct>`font-size: 12pt;`</answer>
    <answer correct>`font-size: 2em;`</answer>
    <answer>`font-size: 12;`</answer>
    <answer correct>`font-size: 100%;`</answer>
    <explanation>All of the following are valid font sizes except for the 12 without units.</explanation>
  </question>
</quiz>

<quiz>
  <question multiple>
    <p>From the reading, identify the two options that are relative units of measurement defined by CSS.</p>
    <answer correct>`em`</answer>
    <answer correct>`rem`</answer>
    <answer>`px`</answer>
    <answer>`pt`</answer>
    <explanation>The units `em` and root em (`rem`) are relative units of measure. The inch (`in`) and centimeter (`cm`) are absolute units of measure.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>Which of the following is the CSS property used to set text to _italic_?</p>
    <answer correct>`font-style`</answer>
    <answer>`font-align`</answer>
    <answer>`font-weight`</answer>
    <answer>`font-slant`</answer>
    <explanation>`font-style` to `italic` is the proper way to set text to italic.</explanation>
  </question>
</quiz>

<quiz>
  <question multiple>
    <p>Select all of the options that CSS would interpret as the color _solid red_.</p>
    <answer correct>`#FF0000`</answer>
    <answer correct>`#F00`</answer>
    <answer>`rgb(1, 0, 0)`</answer>
    <answer correct>`rgb(255, 0, 0)`</answer>
    <answer>`rgba(255, 0, 0, 0)`</answer>
    <answer correct>`red`</answer>
    <explanation>#F00 and #FF000 are both valid hex-values for colors. `rgb` and `rgba` color values are from 1-255, so `rgb(1, 0, 0)` would render as nearly black. The alpha value in `rgba` is from 0-1, so `rgba(255, 0, 0, 0)` would render as transparent.</explanation>
  </question>
</quiz>

<quiz>
  <question multiple>
    <p>When using the `rgba()` method of specifying a color for the browser to render, what alpha value will give the color 50% opacity? (Select all that apply.)</p>
    <answer correct>0.5</answer>
    <answer correct>50%</answer>
    <answer>127</answer>
    <answer>128</answer>
    <answer>There is no way to make a color 50% opacity in CSS using `rgba()`.</answer>
    <explanation>The correct answers are "0.5" and "50%" which indicates that the alpha channel has an opacity value of 50%. Although both versions work, the convention is to use the "0.5" value for this attribute.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>What is the correct CSS property for setting the color of the letters rendered by the browser?</p>
    <answer correct>`color`</answer>
    <answer>`text-color`</answer>
    <answer>`font-color`</answer>
    <answer>`text-decoration`</answer>
    <explanation>The `color` property is the one used by CSS to indicate the color of text.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>Which of the following can _not_ be set by the CSS `border` property?</p>
    <answer>width</answer>
    <answer>line style</answer>
    <answer>color</answer>
    <answer correct>shadow</answer>
    <explanation>There is no "shadow" that is applicable to borders.</explanation>
  </question>
</quiz>

<quiz>
  <question multiple>
    <p>Which of the following are valid CSS properties?</p>
    <answer correct>`border-top`</answer>
    <answer correct>`margin-right`</answer>
    <answer>`outline-bottom`</answer>
    <answer>`padding-inner`</answer>
    <explanation>CSS allows you to use `-top`, `-left`, `-bottom`, and `-right` suffixes for `margin`, `padding`, and `border` to target specific sides.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>Which of the following is ignored when using the setting "border-box" for `box-sizing`?</p>
    <answer>the element's content</answer>
    <answer>padding</answer>
    <answer>border</answer>
    <answer correct>margin</answer>
    <explanation>Neither "border-box" or "content-box" layouts use margin in their measurements. The "border-box" method of calculation does include the other three.</explanation>
  </question>
</quiz>

<quiz>
  <question multiple>
    <p>Which of the following are valid values for the `position` property for CSS?</p>
    <answer correct>absolute</answer>
    <answer correct>fixed</answer>
    <answer correct>relative</answer>
    <answer correct>sticky</answer>
    <answer>inline</answer>
    <answer>inline-block</answer>
    <answer>flex</answer>
    <answer>grid</answer>
    <explanation>The valid values in the list are "absolute", "fixed", "relative", and "sticky".</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>From outer to inner, what order are border, padding and margin applied?</p>
    <answer correct>margin, border, padding</answer>
    <answer>border, margin, padding</answer>
    <answer>padding, margin, border</answer>
    <answer>border, padding, margin</answer>
    <explanation>From outer to inner, the order is margin, border, padding, then the content itself.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>Which of the following is the _default_ value for the CSS `position` property for HTML elements?</p>
    <answer correct>static</answer>
    <answer>block</answer>
    <answer>float</answer>
    <answer>hidden</answer>
    <explanation>The browser defaults an HTML element's position to be static within the layout flow. Thus, "static" value is the default value for the `position` property of HTML elements.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>Which of the following CSS rules will stick an element to the top of the window, regardless of scroll?</p>
    <answer correct>`position: fixed; top: 0;`</answer>
    <answer>`position: absolute; top: 0;`</answer>
    <answer>`position: sticky; top: 0;`</answer>
    <answer>`position: static; top: 0;`</answer>
    <explanation>`position: absolute; top: 0;` will move the element to the top of the page but will scroll normally. `position: sticky; top: 0;` will stick the element to the top of the window until the element is scrolled past. `position: static; top: 0;` will not stick the element to the top of the page. `position: fixed; top: 0;` will stick the element to the top of the page, regardless of scroll.</explanation>
  </question>
</quiz>

<example>![starry-1](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/css/practice_assessment_test_1.jpg)</example>

<quiz>
  <question>
    <p>What is the _most_ appropriate semantic HTML tag for the "Visit Southern France" text?</p>
    <answer correct>`h1`</answer>
    <answer>`h2`</answer>
    <answer>`div`</answer>
    <answer>`strong`</answer>
    <explanation>This is the page's main heading which indicates an `h1` tag</explanation>
  </question>
</quiz>

<example>![starry-2](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/css/practice_assessment_test_2.jpg)</example>

<quiz>
  <question>
    <p>What is the _most_ appropriate semantic HTML tag for the "Saint-Rémy-de-Provence" text?</p>
    <answer>`h2`</answer>
    <answer correct>`p`</answer>
    <answer>`div`</answer>
    <answer>`strong`</answer>
    <explanation>This is a paragraph of text which indicates a `p` tag.</explanation>
  </question>
</quiz>

<example>![starry-3](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/css/practice_assessment_test_3.jpg)</example>

<quiz>
  <question>
    <p>What is the _most_ appropriate semantic HTML tag for the "Featuring" text?</p>
    <answer>`h1`</answer>
    <answer correct>`h2`</answer>
    <answer>`div`</answer>
    <answer>`strong`</answer>
    <answer>`em`</answer>
    <answer>`i`</answer>
    <explanation>This is a level 2 subheading, which indicates a `h2` tag</explanation>
  </question>
</quiz>

<example>![starry-4](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/css/practice_assessment_test_4.jpg)</example>

<quiz>
  <question>
    <p>What is the _most_ appropriate semantic HTML tag for the list of features?</p>
    <answer correct>ul</answer>
    <answer>ol</answer>
    <answer>bullet</answer>
    <answer>a</answer>
    <answer>em</answer>
    <answer>i</answer>
    <explanation>This is an unordered, bulleted list which uses a 'ul' tag.</explanation>
  </question>
</quiz>

<example>![starry-5](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/css/practice_assessment_test_5.jpg)</example>

<quiz>
  <question>
    <p>What is the _most_ appropriate semantic HTML tag for the picture?</p>
    <answer>`image`</answer>
    <answer>`background-image`</answer>
    <answer>`div`</answer>
    <answer correct>`img`</answer>
    <explanation>This is an image which should use an `img` tag. The same feature could also be accomplished using a `div` with a `background-image` CSS property, but it is less appropriate since the image is not in the background of any other elements.</explanation>
  </question>
</quiz>

<example>![serif-choice](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/css/App_Academy_CSS_Test_8.jpg)</example>

<quiz>
  <question multiple>
    <p>Identify each of the selections which are <em>sans-serif</em> fonts.</p>
    <answer>Selection A</answer>
    <answer correct>Selection B</answer>
    <answer>Selection C</answer>
    <answer correct>Selection D</answer>
    <explanation>Selection A (New Tegomin) and C (Kurale) are both serif fonts. Selection B (Poppins) and Selection D (Poppins) are sans-serif.</explanation>
  </question>
</quiz>

[starry-1]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/css/practice_assessment_test_1.jpg
[starry-2]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/css/practice_assessment_test_2.jpg
[starry-3]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/css/practice_assessment_test_3.jpg
[starry-4]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/css/practice_assessment_test_4.jpg
[starry-5]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/css/practice_assessment_test_5.jpg
[serif-choice]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/css/App_Academy_CSS_Test_8.jpg

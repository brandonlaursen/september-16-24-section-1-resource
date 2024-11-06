```css
.tree {
  display: inline-block;
  width: 600px;
}
```

<quiz>
  <free-response>
    <prompt>Given the above CSS, write a media query that would change elements that have the tree class to widths of "100%" and display types of "block" for viewport widths less than or equal to 600px.</prompt>
    <max-response-length>2000</max-response-length>
    <explanation>
    The following code shows what a way to solve this problem.

    ```css
    @media (max-width: 600px) {
      .tree {
        display: block;
        width: 100%
      }
    }
    ```
    </explanation>
    <example-answer>
    ```css
    @media (max-width: 600px) {
      .tree {
        display: block;
        width: 100%
      }
    }
    ```
    </example-answer>
    <grading-rubric>
      The student should have the following:

      - A media query that targets the `min-width` property with a value of "600px
      - A CSS rule that targets the "tree" CSS class
      - Setting the `display` property to "block"
      - Setting the `width` property to "100%"
    </grading-rubric>
  </free-response>
</quiz>

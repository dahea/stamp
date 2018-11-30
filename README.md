### Stamp

To view online:  
http://www.dahea.rocks/atdev/stamp

To run on your local machine:  
1) `git clone https://github.com/dahea/stamp.git`  
2) `cd stamp`  
3) `yarn`  
4) `yarn start`

### Notes on Process
- Stateless/functional components used instead of React class because state and lifecycle functions (componentDidMount, componentDidUpdate) were not needed

- Use of an icons library (https://www.npmjs.com/package/react-feather)  

- Bootstrap / react-strap not used because this was not part of a larger build. As a stand-alone landing page, using the entire bootstrap framework would add a lot of unnecessary size to the overall build.

- Same MainNav component used in the header and the secondary nav.

- Overlay pseudo element added so that the background image will be easier to update without worrying about adding a custom overlay or gradient via photoshop.

### Improvements
- Place images in the public folder instead of in src/assets  
	Benefits:  
		- better caching
		- smaller file size for js bundle

- Use of a CSS-in-JS library to couple styles directly with their components  
	A few different libraries include:
	- https://www.styled-components.com/
	- https://glamorous.rocks/
	- https://emotion.sh/

- Image optimization to serve scaled images based on device/display size

### Design Notes
- Error message placement for form is not intuitive. An option would be to replace the placeholder text with the error message, however this would only work for brief messages. Longer error messages would break the layout and would be better shown above or below the form.

- 2 different navigation options in the header might be confusing. The mockup doesn't show whether the main navigation in the header is for important items while less important navigation items might be within the hamburger nav. Nor does it specify whether the middle navigation changes based on which page one is viewing, or whether they will act as page anchors for different sections of the page.
# Demo ScandiPWA 40.000 SKU store

## Version 1 *15/03/23*

Checked briefly what company does and had a look at the

documentation of what is required to get started.

### Installation

Created a repo in GitHub and followed the guidlines from the

documentation.

#### `Issue faced` :

Had an updated version of Node (v16) and I specifically had to use the Node v14.

**Solved**

```bash
npm install -g n

n install 14
```

#### `Issue faced` :

VSCode didn't have permission to write into the project folder. 

**Solved**

```bash
sudo chown -R ariola directory_name
```

### Running the App

Managed to run the app at `http://localhost:3000/` and open it

in the browser.

#### `Issue faced` :

Got a 404 Error - Page not Found

**Approach**:

-   Inspected the console
-   Checked the network
-   Investigated on Slack 

On Slack was suggested to amend the proxy on the package.json, 
which solved the issue partially. After giving some time, I refreshed the page and the error disappeared. It seems that Magento server provided sometimes can not be reached, resulting in 502 errors.


### Customizing the App

Followed the instructions of documentaion, and used Scandi CLI to override the Cookie component.

```bash
scandipwa override component CookiePopup
```

I chose to **keep** only the style file.

#### `Issue faced` :

Failed to compile the changes in css

**Solved**

On VSCode edited the settings so that the tabs are set to 4 spaces.

Finally, I extened the styling of the CookiePopup component and made it responsive. 

> Note : I found the project quite interesting and challenging at the same time. This is a new way of working for me and I found very smart that you can get a whole page and just plug in the changes that you need. I love that is uses React. 


## Version 2 *21/03/23*

### Restyling

`Margin`

In order for the CookiePopup component to be more responsive, I removed the margin on the left side and on the bottom.


`Font size` , `width` , `padding`

I amended also the font size, the width as well as the padding of the content and the button of the CookiePopup in order to be more mobile-friendly. 
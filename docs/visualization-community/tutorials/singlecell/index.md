---
title: Create a Single-Cell track with a .fpkm file 
---

# Description 
In this tutorial, one will learn how to run the ProteinPaint command from within VisCom to create a Single-Cell track by using a .fpkm file as seen in [VisCom](https://viz.stjude.cloud/hyde-lab/visualization/retinal-regeneration-single-cell-of-chick-retina-following-nmdagrowth-factor-gf-insulinfgf-treatment~73).

Use: 2D scatterplot of samples with metadata
[ProteinPaint Google Docs](https://docs.google.com/document/d/1YVxw2aPru6bAlTzUfE9GAQAvzbiBiqJiBR1X-g5ZBLI/edit)


!!!tip
* The code block below remains static for any visualization (except *nativetracks* for Lollipop)
```JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: document.getElementById('a'),
    parseurl: true,
    block: true,
    nobox: 1,
    noheader: 1,
    nativetracks: "RefGene",
```
*	ProteinPaint has case sensitive parameters like *indexUrl* vs *indexurl*.
*   Expert customization can be found in Google Docs hyperlink above.
!!!

## Getting started:
*   Login to VisCom and create a new visualization.
*   Copy the code block example that best fits where your data lives.
*   Update the genome parameter, line 6.

## When data is hosted on the DNAnexus server:
*   Login to VisCom and create a new visualization.
*   Copy the code block example below.
*	Upload the .fpkm data into DNAnexus.
*	Locate your .fpkm in your DNAnexus project.
*	On the right of the file, click the 3 dot menu for the .fpkm file.
*   Select download in the dropdown.
    *	This will prompt a GET URL link.
*	Click 'Get URL' to copy the temporary link.

!!!warning 
This link allows others to access this file and is only available for 24h.
!!!

*	Paste the link into *jsonUrl* line 7 in the example below.
*   Save your visualization in VisCom.
*   Click the 'Go Back' button in VisCom.
*   Click your visualization title to render. 

!!!tip
* Other free storage software is compatible to use with the URL parameter.
* Follow the DNAnexus steps, but replace the URL accordingly.
!!!

**URL Parameter EXAMPLE**
```JS
runproteinpaint({
	host:'https://proteinpaint.stjude.org',
    holder:document.getElementById('aaa'),
    noheader:1,
	singlecell:{
       genome:'galGal5',
       jsonUrl:'enter link here'
    },
})
```

# When data is hosted on the HPC
*	Upload the fpkm data onto the HPC.
*	Locate your fpkm data in your directory.
*	Find the path to this file.
*   Add path to file to line 7.
*   Save your visualization in VisCom.
*   Click the 'Go Back' button in VisCom.
*   Click your visualization title to render. 

!!!tip
If you need to convert a .rds or flat file to .fpkm please reach out to [Xin Zhou's group](https://www.stjude.org/directory/z/xin-zhou.html)
!!!

**Path to File EXAMPLE**

```JS
runproteinpaint({
	host:'https://proteinpaint.stjude.org',
    holder:document.getElementById('aaa'),
    noheader:1,
	singlecell:{
       genome:'galGal5',
       jsonfile:'name/path_to_file.json'
    },
})
```

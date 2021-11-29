---
title: Create a GenomePaint Track with a VCF File
---
# Description 
In this tutorial, one will learn how to run the ProteinPaint command from within VisCom to create a GenomePaint track by using a VCF file as seen in [VisCom](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/genomepaint-vcf-track-example~30).

Use: Explore coding and non-coding variants in cancer 
[ProteinPaint Google Docs](https://docs.google.com/document/d/1owXUQuqw5hBHFERm0Ria7anKtpyoPBaZY_MCiXXf5wE/edit)


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

*   Genome and position can change values.

``` JS
genome: 
postion: 
```

*	Tracks contain different parameters.

```
tracks: [
        {
            type: "vcf",
            name: "name of file",
            url: "insert vcf.gz hyperlink here",
            indexUrl: "insert vcf.gz.tbi link here"
        }
    ]
})
```

*	ProteinPaint has case sensitive parameters like *indexUrl* vs *indexurl*.
*   Expert customization can be found in Google Docs hyperlink above.
!!!

## Getting started:
*   Login to VisCom and create a new visualization.
*   Copy the code block example that best fits where your data lives.
*   Update the genome parameter, line 7.
*   Update the gene parameter, line 8.
*   Update the name in the track, line 13 in either example. 

## When data is hosted on the DNAnexus server:
*   Update the name for the track (line 13).
*	Upload the VCF data into DNAnexus.
*	Locate your VCF data in your DNAnexus project.
*	On the right of the file, click the 3 dot menu for the .gz file.
*   Select download in the dropdown.
    *	This will prompt a GET URL link.
*	Click 'Get URL' to copy the temporary link.

!!!warning 
This link allows others to access this file and is only available for 24h.
!!!

*	Paste the link into the *url*, line 14.
*	Click the 3 dot menu for the .gz.gz (.tbi) file.
*   Select download in the dropdown.
    *	This will prompt a GET URL link.
*	Click 'Get URL' to copy the temporary link.

!!!warning
This link allows others to access this file and is only available for 24h.
!!!

*	Paste the vcf.gz link into the *indexUrl*, line 15.
*   Add name of file to line 12. 
*   Save your visualization in VisCom.
*   Click the 'Go Back' button in VisCom.
*   Click your visualization title to render. 

!!!tip
* Other free storage software is compatible to use with the URL parameter.
* Follow the DNAnexus steps, but replace the URL accordingly.
!!!

**URL Parameter EXAMPLE**
``` JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: document.getElementById('a'),
    parseurl: true,
    nobox: 1,
    noheader: 1,
    genome: "hg38",
    gene: "BCL11A",
    nativetracks: "RefGene",
    tracks: [
        {
            type: "vcf",
            name: "name of track",
            url: "paste link here",
            indexUrl: "paste link here"
        }
    ]
})
```

# When data is hosted on the HPC
*	Upload the VCF data onto the HPC.
*	Locate your VCF data in your directory.
*	Ensure you have a .gz file in your directory.
*	Find the path to this file.
*   Add path to file in line 14.
*   Add name of file to line 12.
*   Save your visualization in VisCom.
*   Click the 'Go Back' button in VisCom.
*   Click your visualization title to render. 


**Path to File EXAMPLE**
```JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: document.getElementById('a'),
    parseurl: true,
    nobox: 1,
    noheader: 1,
    genome: "hg38",
    gene: "BCL11A",
    nativetracks: "RefGene",
    tracks: [
        {
            type: "vcf",
            name: "name of track",
            file: "paste name/path_to_file/vcf.gz here"
        }
    ]
})
```
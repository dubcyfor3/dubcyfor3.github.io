---
permalink: /
title: "About Chiyue Wei"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
.comment{
    background: white;
    color: #BD2A2E;
    font-size: 12px;
    padding: 1px 5px 1px 5px;
    border-radius: 0px;
    float: left;
    font-weight: bold;
}
</style>

Chiyue Wei is a Ph.D. student in Electrical and Computer Engineering at Duke University, working under the supervision of Professor Yiran Chen. His research interests lie at the intersection of computer architecture and deep learning. Prior to Duke, he earned his Bachelor's degree in Electronic Engineering from Tsinghua University in 2023, where he conducted research with Professor Yuan Xie and Professor Yu Wang.


🔥 News
------
- [2025/05] 🎉 I’m excited to start my summer internship at <span style="color:green;">NVIDIA</span>, focusing on **LLM inference framework optimization** within the Deep Learning Frameworks team.

- [2025/03] 🎉🎉🎉 **Three** papers accepted by **ISCA 2025**! Topics include acceleration for Spiking Neural Networks, General Matrix Multiplications, and Large Language Models.
- [2025/03] 🔥 Chiyue Wei presents *Prosperity* at **HPCA 2025** in Las Vegas! Check out presentation slides and [video](https://drive.google.com/file/d/1V4n_Hv-1amCCZpIMWTX0venCL3rlbRPF/view?usp=sharing).
- [2024/11] 🎉 Our paper "*Prosperity*: Accelerating Spiking Neural Networks via Product Sparsity" is accepted by **HPCA 2025**.


📝 Selected Publications
------
- ``ISCA 2025`` Phi: Leveraging Pattern-based Hierarchical Sparsity for High-Efficiency Spiking Neural Networks, **Chiyue Wei***, Bowen Duan*, Cong Guo, Jingyang Zhang, Qingyue Song, Hai Li, Yiran Chen

- ``ISCA 2025`` Transitive Array: An Efficient GEMM Accelerator with Result Reuse, Cong Guo, **Chiyue Wei**, Jiaming Tang, Bowen Duan, Song Han, Hai Li, Yiran Chen

- ``ISCA 2025`` Ecco: Improving Memory Bandwidth and Capacity for LLMs via Entropy-Aware Cache Compression, Feng Cheng, Cong Guo, **Chiyue Wei**, Junyao Zhang, Changchun Zhou, Edward Hanson, Jiaqi Zhang, Xiaoxiao Liu, Hai Li, Yiran Chen

- ``HPCA 2025`` [Prosperity: Accelerating Spiking Neural Networks via Product Sparsity](https://arxiv.org/abs/2503.03379),
**Chiyue Wei**, Cong Guo, Feng Cheng, Shiyu Li, Hao Yang, Hai Li, Yiran Chen
[![](https://img.shields.io/github/stars/dubcyfor3/Prosperity?style=social&label=Code+Stars)](https://github.com/dubcyfor3/Prosperity)

- ``DATE 2023`` [CLAP: Locality Aware and Parallel Triangle Counting with Content Addressable Memory](https://ieeexplore.ieee.org/abstract/document/10136997),
Tianyu Fu*, **Chiyue Wei***, Zhenhua Zhu, Shang Yang, Zhongming Yu, Guohao Dai, Huazhong Yang, Yu Wang
[![](https://img.shields.io/github/stars/thu-nics/CLAP-triangle-counting?style=social&label=Code+Stars)](https://github.com/thu-nics/CLAP-triangle-counting)

- ``ISCA 2022`` [DIMMining: Pruning-Efficient and Parallel Graph Mining on Near-Memory-Computing](https://dl.acm.org/doi/abs/10.1145/3470496.3527388),
Guohao Dai, Zhenhua Zhu, Tianyu Fu, **Chiyue Wei**, Bangyan Wang, Xiangyu Li, Yuan Xie, Huazhong Yang, Yu Wang





<!-- This is the front page of a website that is powered by the [Academic Pages template](https://github.com/academicpages/academicpages.github.io) and hosted on GitHub pages. [GitHub pages](https://pages.github.com) is a free service in which websites are built and hosted from code and data stored in a GitHub repository, automatically updating when a new commit is made to the repository. This template was forked from the [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/) created by Michael Rose, and then extended to support the kinds of content that academics have: publications, talks, teaching, a portfolio, blog posts, and a dynamically-generated CV. You can fork [this template](https://github.com/academicpages/academicpages.github.io) right now, modify the configuration and markdown files, add your own PDFs and other content, and have your own site for free, with no ads!

A data-driven personal website
======
Like many other Jekyll-based GitHub Pages templates, Academic Pages makes you separate the website's content from its form. The content & metadata of your website are in structured markdown files, while various other files constitute the theme, specifying how to transform that content & metadata into HTML pages. You keep these various markdown (.md), YAML (.yml), HTML, and CSS files in a public GitHub repository. Each time you commit and push an update to the repository, the [GitHub pages](https://pages.github.com/) service creates static HTML pages based on these files, which are hosted on GitHub's servers free of charge.

Many of the features of dynamic content management systems (like Wordpress) can be achieved in this fashion, using a fraction of the computational resources and with far less vulnerability to hacking and DDoSing. You can also modify the theme to your heart's content without touching the content of your site. If you get to a point where you've broken something in Jekyll/HTML/CSS beyond repair, your markdown files describing your talks, publications, etc. are safe. You can rollback the changes or even delete the repository and start over - just be sure to save the markdown files! Finally, you can also write scripts that process the structured data on the site, such as [this one](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb) that analyzes metadata in pages about talks to display [a map of every location you've given a talk](https://academicpages.github.io/talkmap.html).

Getting started
======
1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Fork [this template](https://github.com/academicpages/academicpages.github.io) by clicking the "Use this template" button in the top right. 
1. Go to the repository's settings (rightmost item in the tabs that start with "Code", should be below "Unwatch"). Rename the repository "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and create content & metadata (see below -- also see [this set of diffs](http://archive.is/3TPas) showing what files were changed to set up [an example site](https://getorg-testacct.github.io) for a user with the username "getorg-testacct")
1. Upload any files (like PDFs, .zip files, etc.) to the files/ directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.  
1. Check status by going to the repository settings, in the "GitHub pages" section

Site-wide configuration
------
The main configuration file for the site is in the base directory in [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header. 

Create content & metadata
------
For site content, there is one markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

The repository includes [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the Academic Pages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
------
Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons. 

Example: editing a markdown file for a talk
![Editing a markdown file for a talk](/images/editing-talk.png)

For more info
------
More info about configuring Academic Pages can be found in [the guide](https://academicpages.github.io/markdown/), the [growing wiki](https://github.com/academicpages/academicpages.github.io/wiki), and you can always [ask a question on GitHub](https://github.com/academicpages/academicpages.github.io/discussions). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful. -->

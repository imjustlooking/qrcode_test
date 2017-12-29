# QR Scan

Visit [here](https://imjustlooking.github.io/qrscan/).
As its name implies, this is a QR code scanner, ideally used with a mobile phone. It reads camera input, then outputs the scan content into a field where users can either copy to clipboard, or visit (if they believe it is a trusted & valid url).

Background
======
I tinkered with the [Instascan API](https://github.com/schmich/instascan) for a previous project, HawkerPay, in order to implement a QR code reader. While the project had too narrow a deadline to include this snippet, I decided to revisit this to make something useful. While usually in the form of apps, QR scanners often come bundled with annoying ads. So one upside is that you don't need to bother with those :), but you'd need internet access to visit the site first!

Made with
======
Javascript + Html + Slight CSS + [Instascan API](https://github.com/schmich/instascan)

Requirements
======
As long as you have a device with a camera and browser access. Seems to not work properly with iPhones, but tested well on my android phone(Samsung S7). Works best on Chrome browser, but default Samsung Internet browser allowed to toggle the active camera too.


Features
======
  * QR scanner API (obviously)
  * Using DOM selectors:
    * Copy scanned content to clipboard
    * Visit scanned content as url
    * Clear scanned content
  * Adjust default starting camera based on device camera numbers. E.g.: For my phone (android), defaults to the back camera, whereas for laptop, uses just the front/ any available camera.

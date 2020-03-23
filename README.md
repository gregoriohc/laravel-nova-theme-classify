# Laravel Nova Classify Theme

[![Latest Version on Packagist](https://img.shields.io/packagist/v/gregoriohc/laravel-nova-theme-classify.svg?style=flat-square)](https://packagist.org/packages/gregoriohc/laravel-nova-theme-classify)
[![Total Downloads](https://img.shields.io/packagist/dt/gregoriohc/laravel-nova-theme-classify.svg?style=flat-square)](https://packagist.org/packages/gregoriohc/laravel-nova-theme-classify)

Laravel Nova theme helper that add CSS classes to the main nova views elements, making it easier to style it.

## Installation

You can install the nova theme helper into a Laravel app that uses [Nova](https://nova.laravel.com) via composer:

```bash
composer require gregoriohc/laravel-nova-theme-classify
```

## Usage

You can use this theme helper in three ways:

### A) Adding an stylesheet on your Nova app, and using the provided CSS classes to customize the styles

First, publish the package skeleton stylesheet:
```bash
php artisan vendor:publish --provider="Gregoriohc\LaravelNovaThemeClassify\ThemeServiceProvider"
```

Then, update the stylesheet with your custom styles. The file is located in `resources/css/vendor/laravel-nova-theme-classify/theme.css`

### B) Creating your own theme and adding this one as a dependency

First, create your own Nova theme:
```bash
php artisan nova:theme MyCustomTheme
```
Then, customize the CSS of your own theme, using the CSS classes provided by this one.

If you want to public release your theme, don't forget to add this as a dependency:
```bash
cd path/to/MyCustomTheme
composer require gregoriohc/laravel-nova-theme-classify
```

### C) Using it as a base to create your own theme

Simply, clone this repo, and modify it to create your custom theme.

## Credits

- [Gregorio Hernández Caso](https://github.com/gregoriohc)

## Support the development
**Do you like this project? Support it by donating**

- PayPal: [Donate](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=GM9RYQ4R22LKG&currency_code=EUR&source=url)
- Patreon: [Donate](https://www.patreon.com/gregoriohc)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

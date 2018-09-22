<?php

namespace Gregoriohc\LaravelNovaThemeClassify;

use Laravel\Nova\Nova;
use Laravel\Nova\Events\ServingNova;
use Illuminate\Support\ServiceProvider;

class ThemeServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Nova::serving(function (ServingNova $event) {
            $themePath = resource_path('css/vendor/laravel-nova-theme-classify/theme.css');
            if (file_exists($themePath)) {
                Nova::style('laravel-nova-theme-classify', $themePath);
            }
            Nova::script('laravel-nova-theme-classify', __DIR__.'/../resources/js/theme.js');
        });

        $this->publishes([
            __DIR__ . '/../resources/css' => resource_path('css/vendor/laravel-nova-theme-classify'),
        ]);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}

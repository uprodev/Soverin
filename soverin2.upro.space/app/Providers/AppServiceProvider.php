<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Statamic\Statamic;
use Statamic\Facades\Collection;
use Statamic\Facades\Entry;
use Statamic\Facades\Term;



class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {






    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Statamic::vite('app', [
        //     'resources/js/cp.js',
        //     'resources/css/cp.css',
        // ]);


        Collection::computed('help', 'category_help_url', function ($entry, $value) {
            $category = $entry->category_help;


            if (!empty($category) && isset($category[0]->slug)) {
                return $category[0]->slug;
            }

        });


    }
}

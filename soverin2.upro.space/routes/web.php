<?php

use Illuminate\Support\Facades\Route;
use JackSleight\StatamicBonusRoutes         ;
use App\Http\Controllers\AjaxController;

// Route::statamic('example', 'example-view', [
//    'title' => 'Example'
// ]);


//Route::bonus('collection:help', '/help/{category_help:0:slug}/{slug}', 'help.show')->name('help.show');
//Route::statamic('help/category_help/{taxonomy_term}', 'blog.show');


Route::get('/ajax/handle', [AjaxController::class, 'handleAjax']);


<?php

namespace App\Providers;

use App\Repositories\Image\CreateImgRepository;
use Illuminate\Support\ServiceProvider;

class ImageRepositoryProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register(): void
    {
        $this->app->singleton(CreateImgRepository::class, function () {
            return new CreateImgRepository();
        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}

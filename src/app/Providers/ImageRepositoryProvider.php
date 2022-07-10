<?php

namespace App\Providers;

use App\Repositories\Image\CreateImgRepository;
use App\Repositories\Image\ImageRepositoryInterface;
use App\Repositories\Image\TestCreateImgRepository;
use Illuminate\Support\Facades\App;
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
        $this->app->singleton(ImageRepositoryInterface::class, function () {

            if (App::environment('local')) {
                return new TestCreateImgRepository();
            }
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

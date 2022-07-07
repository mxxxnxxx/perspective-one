<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ImageController extends Controller
{
    /**
     * @param Request $request
     * @return Response|Application|ResponseFactory
     */

    public function store(Request $request): Response|Application|ResponseFactory
    {
        if ($request->file('img')) {
            $img = $request->file('img');
            $this->createImg($img);
            return response([], 201);
        }
        return response([], 500);
    }


}

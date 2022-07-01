<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\Debugbar\Facades\Debugbar;
use Illuminate\Support\Facades\Storage;
use App\Models\Image;

class ImageController extends Controller
{
    public function store (Request $request) {
        $img = $request->file('img');
        if($img){
            $path = Storage::disk('s3')->put('perspective', $img);
            Image::create([
                'url' => $path
            ]);
            return response([],201);
        }
        return response([],500);
    }
}
